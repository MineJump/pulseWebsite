import { motion } from "framer-motion";
import Card from "./Card.jsx";
import MethodEyebrow from "./MethodEyebrow.jsx";

function CatalogItemCard({ item, variants }) {
  return (
    <Card variant="material" interactive variants={variants} className="p-5 md:p-6">
      <h3
        className="text-base md:text-lg mb-2"
      >
        {item.name}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {item.description}
      </p>
    </Card>
  );
}

export default function CatalogSection({ content, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-10 md:py-14 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          className="mb-10 md:mb-12 max-w-[820px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <MethodEyebrow text={content.eyebrow} variants={item} />
          <motion.h2 variants={item} className="mb-6">
            {content.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {content.body}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {content.items.map((it) => (
            <CatalogItemCard key={it.name} item={it} variants={cardReveal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
