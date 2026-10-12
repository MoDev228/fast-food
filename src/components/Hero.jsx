import { motion } from "motion/react";
import { Button } from "./ui/button";
import HeroImg from "../assets/frontend_assets/hero/hero-img.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero mt-4 rounded-2xl bg-cover bg-center bg-no-repeat min-h-[600px] relative"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
        url(${HeroImg})`,
      }}
    >
      <motion.article
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3}}
       className="hero-content absolute bottom-[8%] left-[8%] w-[55%] text-muted">
        <h1 className="text-8xl mb-8">Des plats savoureux, livrés chez vous</h1>
        <p className="mb-8">
          Découvrez une sélection de plats préparés avec des ingrédients frais
          et de qualité, commandés en quelques clics et livrés rapidement à
          votre porte.
        </p>
        <div className="btn-hero ">
          <Button
            className={
              "py-5 px-8 text-md cursor-pointer shadow-[5px_5px_0] shadow-background hover:bg-background hover:shadow-accent transition hover:text-foreground active:shadow-none active:translate-y-4"
            }
            onClick={() =>
              document
                .getElementById("food-display")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Nos Menus
          </Button>
        </div>
      </motion.article>
    </section>
  );
}

export default Hero;
