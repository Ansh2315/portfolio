import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accent: string;
  outcome: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lightMode = false;
  menuOpen = false;
  submitted = false;
  form = { name: '', email: '', subject: '', message: '' };

  readonly skills = [
    { name: 'Angular (v12, v14, v18, v20)', level: 95, group: 'Frontend' },
    { name: 'TypeScript / JavaScript ES6', level: 92, group: 'Frontend' },
    { name: 'RxJS / NgRx', level: 90, group: 'State & async' },
    { name: 'Nx / Micro-Frontend', level: 88, group: 'Architecture' },
    { name: 'AG Grid', level: 88, group: 'Data UI' },
    { name: 'SCSS / Bootstrap / Material UI', level: 90, group: 'UI engineering' },
    { name: 'Cypress E2E testing', level: 75, group: 'Quality' },
    { name: 'Python FastAPI / REST APIs', level: 70, group: 'Backend exposure' }
  ];

  readonly stack = [
    'Angular v12–v20', 'TypeScript', 'JavaScript ES6', 'RxJS', 'NgRx', 'Nx',
    'Micro-Frontend', 'AG Grid', 'React', 'HTML / CSS', 'SCSS', 'Bootstrap',
    'Material UI', 'Cypress', 'GitLab', 'GitHub', 'JIRA', 'Azure', 'Figma',
    'Python FastAPI', 'PostgreSQL', 'MongoDB', 'GitHub Copilot', 'MCP'
  ];

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Energy Manager',
      description: 'Industrial energy monitoring app with bar, line, and donut visualizations to track usage, costs, and emissions, with real-time fault detection and performance insights.',
      tags: ['Angular', 'Charts', 'Industrial IoT', 'Analytics'],
      icon: '↗',
      accent: 'blue',
      outcome: 'Energy & emissions insights'
    },
    {
      number: '02',
      title: 'Process Analytics',
      description: 'Industrial machine-alarm monitoring and visualization with charts and detailed reports, helping reduce manual checks and accelerate fault detection.',
      tags: ['Angular', 'RxJS', 'Charts', 'Reporting'],
      icon: '⌁',
      accent: 'violet',
      outcome: 'Faster alarm visibility'
    },
    {
      number: '03',
      title: 'Core Platform Features',
      description: 'Reusable Angular platform features and shared components across applications, supported by framework upgrades, dependency optimization, and security improvements.',
      tags: ['Angular', 'Nx', 'Reusable UI', 'Security'],
      icon: '⌘',
      accent: 'cyan',
      outcome: 'Shared platform capabilities'
    }
  ];

  toggleTheme(): void {
    this.lightMode = !this.lightMode;
    document.documentElement.classList.toggle('light-theme', this.lightMode);
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/Anshuman-Behera-Resume.pdf';
    link.download = 'Anshuman-Behera-Resume.pdf';
    link.click();
  }

  sendMessage(): void {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.message.trim()) return;
    const subject = encodeURIComponent(this.form.subject || `Portfolio enquiry from ${this.form.name}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`
    );
    window.location.href = `mailto:anshuman3127@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}