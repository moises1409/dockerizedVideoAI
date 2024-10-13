import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-video-generation',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './video-generation.component.html',
  styleUrl: './video-generation.component.css'
})

export class VideoGenerationComponent {
  generatedText: string = '';

  private apiUrl_local = 'http://localhost:4000';
  private apiUrl_prod =
    'https://videoai-flaskapi-f5d4cmfncnfzaxgc.eastus-01.azurewebsites.net';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  private getApiUrl(endpoint: string): string {
    const baseUrl = this.isProduction() ? this.apiUrl_prod : this.apiUrl_local;
    return `${baseUrl}${endpoint}`;
  }

  private isProduction(): boolean {
    return window.location.hostname !== 'localhost';
  }

  testFunction(): void {
    const apiUrl = this.getApiUrl('/test');
    // Call the Flask API and subscribe to the response
    this.http.get<{ message: string }>(apiUrl)
      .subscribe(response => {
        // Assign the message from the response to generatedText
        this.generatedText = response.message;
      }, error => {
        // Handle errors here if needed
        console.error('API error:', error);
      });
  }
}
