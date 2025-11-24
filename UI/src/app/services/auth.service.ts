import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Session, User, AuthChangeEvent } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _session = new BehaviorSubject<Session | null>(null);
    private _user = new BehaviorSubject<User | null>(null);

    constructor(private supabaseService: SupabaseService, private router: Router) {
        this.loadSession();
        this.supabaseService.client.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed:', event, session);
            this.updateSession(session);
            if (event === 'SIGNED_OUT') {
                this._session.next(null);
                this._user.next(null);
                this.router.navigate(['/login']);
            } else if (event === 'SIGNED_IN' && session) {
                // Redirect to dashboard after successful sign-in
                const currentPath = this.router.url.split('#')[0];
                if (currentPath === '/' || currentPath === '/login') {
                    this.router.navigate(['/dashboard']);
                }
            }
        });
    }

    private async loadSession() {
        const { data } = await this.supabaseService.client.auth.getSession();
        this.updateSession(data.session);
        // If we have a session after loading and we're on root or login, redirect to dashboard
        if (data.session) {
            const currentPath = this.router.url.split('#')[0];
            if (currentPath === '/' || currentPath === '/login') {
                this.router.navigate(['/dashboard']);
            }
        }
    }

    private updateSession(session: Session | null) {
        this._session.next(session);
        this._user.next(session?.user ?? null);
    }

    get session$(): Observable<Session | null> {
        return this._session.asObservable();
    }

    get user$(): Observable<User | null> {
        return this._user.asObservable();
    }

    async signIn(email: string) {
        return this.supabaseService.client.auth.signInWithOtp({ email });
    }

    async signInWithPassword(email: string, password: string) {
        return this.supabaseService.client.auth.signInWithPassword({
            email,
            password,
        });
    }

    async signUp(email: string, password: string) {
        return this.supabaseService.client.auth.signUp({
            email,
            password,
        });
    }

    async signInWithGoogle() {
        return this.supabaseService.client.auth.signInWithOAuth({
            provider: 'google',
        });
    }

    async signOut() {
        return this.supabaseService.client.auth.signOut();
    }

    get isAuthenticated(): boolean {
        return !!this._session.value;
    }
}
