
import './componentsStyle/SectionTestimonials.css';
import TestimonialsCardList from './TestimonialsCardList';

export default function SectionTestimonials() {
    return (
        <section className="section-testimonials">
            <div className="wrapper">
                <h2 className='testimonials-title'> Testimonials</h2>
                <p className='testimonials-subtitle'>Plant parents love us</p>
                <TestimonialsCardList />
            </div>
        </section>
    );
}
