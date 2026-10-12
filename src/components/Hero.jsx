import { motion } from "motion/react";
import { Button } from "./ui/button";
import HeroImg from "../assets/frontend_assets/hero-img.jpg";

function Hero() {
  return (
    <section
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
        <h1 className="text-8xl mb-8">Lorem ipsum dolor sit</h1>
        <p className="mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          vitae, adipisci, veritatis, cum assumenda amet quas doloribus
          doloremque ex in tenetur iusto temporibus. Laboriosam omnis magni id
          ipsa alias. Rem, quia eos! Cumque.
        </p>
        <div className="btn-hero ">
          <Button
            className={
              "py-5 px-8 text-md cursor-pointer shadow-[5px_5px_0] shadow-background hover:bg-background hover:shadow-accent transition hover:text-foreground active:shadow-none active:translate-y-4"
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
