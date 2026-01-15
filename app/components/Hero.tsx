export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 text-foreground">
      <h1 className="text-4xl font-bold">
        Hi, I’m Jose, a software developer based in Barcelona.
      </h1>
      <p className="mt-4 text-lg text-foreground/80 max-w-xl">
        I like building things, and I like it when those things are cool and
        they work. Currently pursuing a master's in Software Development and
        Architecture, so that I can build more cool things that work, yes. I
        also like QA and testing a lot!
      </p>
      <p className="mt-4 text-lg text-foreground/80 max-w-xl">
        I mainly use JavaScript, React, TypeScript, Python, but Java and C++
        look interesting too so if I get bored I might try to make some cool
        things with those, too. Hopefully they'll work...
      </p>
      <a
        href="#projects"
        className="mt-6 text-primary hover:text-primaryMuted transition"
      >
        See my work →
      </a>
    </section>
  );
}
