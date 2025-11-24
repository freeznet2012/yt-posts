import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    loading = false;
    error: string | null = null;
    isLoginMode = true;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
        this.error = null;
        this.loginForm.reset();
    }

    async onSubmit() {
        if (this.loginForm.invalid) return;

        this.loading = true;
        this.error = null;

        const { email, password } = this.loginForm.value;

        try {
            let result;
            if (this.isLoginMode) {
                result = await this.authService.signInWithPassword(email, password);
            } else {
                result = await this.authService.signUp(email, password);
            }

            const { error, data } = result;
            if (error) throw error;

            if (this.isLoginMode) {
                this.router.navigate(['/dashboard']);
            } else {
                // For sign up, check if email confirmation is required
                if (data.user && !data.session) {
                    this.error = 'Registration successful! Please check your email to confirm your account.';
                    this.loginForm.reset();
                } else {
                    this.router.navigate(['/dashboard']);
                }
            }
        } catch (err: any) {
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    }

    async onGoogleLogin() {
        this.loading = true;
        this.error = null;
        try {
            const { error } = await this.authService.signInWithGoogle();
            if (error) throw error;
            // OAuth redirect happens automatically
        } catch (err: any) {
            this.error = err.message;
            this.loading = false;
        }
    }
}
