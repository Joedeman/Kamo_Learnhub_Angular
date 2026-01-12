import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { ButtonComponent } from '../../shared/button/button';
import { CardComponent } from '../../shared/card/card';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';

interface Subject {
  name: string;
  grades: string;
  icon: string;
}

interface Strength {
  title: string;
  description: string;
  icon: string;
}

interface Philosophy {
  title: string;
  description: string;
  icon: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Program {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  message: string;
  achievement?: string;
  institution?: string;
}

interface PricingFeature {
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    TestimonialCardComponent,
    SectionHeadingComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  
  private isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}


  // Hero Section Data
  heroTitle = 'Kamogelo Masetloa';
  heroSubtitle = 'Professional Tutoring Portfolio';
  heroTagline = 'Helping learners unlock their potential through clear explanations and proven results.';
  
  heroStats = [
    { value: '100+', label: 'Learners Tutored' },
    { value: '98%', label: 'Top Result Achieved' },
    { value: '4+', label: 'Years Experience' }
  ];

  
  // About Section Data
  subjects: Subject[] = [
    {
      name: 'Mathematics',
      grades: 'Grade 8-12',
      icon: '📐'
    },
    {
      name: 'Physical Sciences',
      grades: 'Grade 11-12',
      icon: '🔬'
    }
  ];

  strengths: Strength[] = [
    {
      title: 'Simplifying Complex Concepts',
      description: 'Breaking down difficult topics into easy-to-understand explanations',
      icon: '💡'
    },
    {
      title: 'Exam Preparation',
      description: 'Proven strategies and techniques for maximizing exam performance',
      icon: '📝'
    },
    {
      title: 'Problem-Solving Skills',
      description: 'Building strong analytical and critical thinking abilities',
      icon: '🧩'
    },
    {
      title: 'Confidence Building',
      description: 'Empowering learners to believe in their academic potential',
      icon: '⭐'
    }
  ];

  // Philosophy Section Data
  philosophies: Philosophy[] = [
    {
      title: 'Learner-Focused',
      description: 'Every learner learns differently, so I adapt my teaching style to meet each learner\'s needs.',
      icon: '👤'
    },
    {
      title: 'Step-by-Step Guidance',
      description: 'Breaking complex concepts into smaller, understandable parts.',
      icon: '📊'
    },
    {
      title: 'Active Learning',
      description: 'Encouraging learners to solve problems with guidance, not just observe.',
      icon: '🎯'
    },
    {
      title: 'Results-Driven',
      description: 'My aim is to help learners improve marks, but more importantly, to truly understand.',
      icon: '🏆'
    },
    {
      title: 'Support Beyond Class',
      description: 'Learners can reach out for quick clarifications outside sessions.',
      icon: '💬'
    }
  ];

  // Timeline Section Data
  timeline: TimelineEvent[] = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'During my matric year, I began my tutoring journey by assisting my Mathematics teacher in teaching her Grade 11 students.'
    },
    {
      year: '2023',
      title: 'Gap Year Growth',
      description: 'Tutored a group of Grade 12 learners on Sundays via Zoom. Additionally, conducted one-on-one sessions with learners who were rewriting their exams.'
    },
    {
      year: '2024',
      title: 'Continued Excellence',
      description: 'While studying at UP, continued tutoring both individual learners and small groups, achieving exceptional results.'
    },
    {
      year: '2025',
      title: 'International Expansion',
      description: 'Currently delivering structured online Mathematics and Physics to learners in the UK through a UK-based tutoring company.'
    }
  ];

  // International Experience Data
  internationalFeatures = [
    'Engaged with UK-based tutoring company to expand online teaching experience',
    'Delivering structured online Mathematics and Physics to UK learners',
    'Gaining experience in GCSE-style problem-solving and assessment methods',
    'Exposure to teaching international learners via online platforms'
  ];

  // Pricing Data
  pricePerSession = 'R200';
  pricingFeatures: PricingFeature[] = [
    { text: 'Preparation tailored to the learner\'s needs' },
    { text: 'Full explanation + practice exercises' },
    { text: 'Follow-up guidance for quick questions outside session time' }
  ];

  whyPerSession = 'Charging per session ensures learners and parents know exactly what they\'re paying for: focused, high-quality teaching each time, not just "time spent." This also reflects the level of preparation, experience, and effort I invest in making every session effective.';

  // Programs Data
  programs: Program[] = [
    {
      title: 'Grade 12 Mathematics Foundation Bootcamp',
      description: 'Intensive program designed to strengthen foundational concepts and prepare students for final exams.',
      icon: '📚'
    },
    {
      title: 'Small-Group Mathematics & Physics Bootcamps',
      description: 'Collaborative learning environment for students to master challenging topics together.',
      icon: '👥'
    }
  ];

// Featured testimonial (Hero testimonial with best achievement)
featuredTestimonial: Testimonial = {
  name: 'Kamva Mputa',
  message: 'Being tutored by Kamogelo Masetloa was one of the most rewarding experiences in my academic journey. He broke down complex concepts into manageable steps and always encouraged me to push beyond what I thought I was capable of. His belief in me made a real difference.',
  achievement: '98% in Mathematics - Grade 12 2024 NSC',
  institution: 'Chemical Engineering at UCT'
};

// Regular testimonials
testimonials: Testimonial[] = [
  {
    name: 'Musa Tshehla',
    message: 'Kamo, the greatest and only tutor I have ever had. When I first met him I was in grade 11, and there it was my initial turning point academically. He is well-spoken, able to explain concepts short and quick, and he is young and vibrant, which makes it easier for him to understand his students.',
    achievement: 'Improved from 60s-70s to distinctions in matric',
    institution: 'BSc Mathematical Science at UJ'
  },
  {
    name: 'Hlogonolofatso Leshilo',
    message: 'My mathematics tutor, Kamogelo, was a lifesaver in my final year of high school. On Sundays, he held special sessions that went beyond our regular school curriculum, filling in the gaps where teachers had run out of time. His explanations were so clear and intuitive that even the most complex ideas seemed simple.',
    achievement: 'Great mark in Mathematics',
    institution: 'BSc Mathematical Science at SMU'
  },
  {
    name: 'Siphesihle Thabethe',
    message: 'Getting tutored by Kamo in 2024 really made a difference for me. He helped me understand difficult topics clearly and gave me the support I needed to improve my marks. His guidance boosted my confidence.',
    achievement: '80% in Mathematics',
    institution: 'BSc Computer Science at University of Pretoria'
  },
  {
    name: 'Tshireletso',
    message: 'The tutoring, honestly, no regrets. I\'ve seen improvements, especially in terms of confidence when answering questions. I understand topics better than I would in class, since the teacher is catering to a large number of students. Overall, I\'m relieved because I was stressing, and I do expect my grades to improve.',
    achievement: 'Increased confidence and understanding',
    institution: 'Current Student'
  },
  {
    name: 'Parent Testimonial',
    message: 'I\'m happy with the improvement. Thank you for helping him and the results are already showing. With more practice and lessons, the improvement will be greater.',
    achievement: 'Visible grade improvements',
    institution: 'Parent of Student'
  }
];
  // Contact Data
  contactInfo = {
    email: 'masetloakamogelo1@gmail.com',
    phone: '067 661 8616',
    youtube: 'Tutoring with Kamo'
  };

  // Methods
  onGetStarted(): void {
  if (this.isBrowser()) {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

onViewPrograms(): void {
  if (this.isBrowser()) {
    const programsSection = document.querySelector('#programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

onBookSession(): void {
  if (this.isBrowser()) {
    const message = encodeURIComponent('Hi Kamo, I would like to book a tutoring session.');
    window.open(`https://wa.me/27676618616?text=${message}`, '_blank');
  }
}

onContactEmail(): void {
  if (this.isBrowser()) {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}

onContactWhatsApp(): void {
  if (this.isBrowser()) {
    window.open(`https://wa.me/27676618616`, '_blank');
  }
}

onContactYouTube(): void {
  if (this.isBrowser()) {
    window.open('https://youtube.com/@TutoringWithKamo', '_blank');
  }
}
}