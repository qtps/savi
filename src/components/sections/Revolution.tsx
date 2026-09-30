import RevolutionCard from '../ui/RevolutionCard';

const Revolution = () => {
  return (
    <section className="container mx-auto px-4 py-12 font-sans sm:px-6 sm:py-16 lg:px-8">
      {/* Container Box */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        {/* Responsive Heading */}
        <h2 className="max-w-4xl text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Revolutionizing Personal Finance Management
        </h2>

        {/* Responsive Subtitle Paragraph */}
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          Take control of your money with Savi. Track your spending, save
          smartly all in one easy-to-use app.
        </p>
      </div>
      <RevolutionCard />
    </section>
  );
};

export default Revolution;
