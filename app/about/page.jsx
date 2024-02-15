import Link from "next/link";

export default function page() {
  return (
    <div>
      <h3 className="text-3xl">
        Acerca de este <span className="text-blue-700 font-bold">proyecto</span>
      </h3>
      <p>
        Este proyecto tiene como objetivo principal la práctica y consolidación
        de los fundamentos de <span className="font-bold">Next.js</span>.
        Utiliza una <span className="text-yellow-400">API de usuarios</span>{" "}
        para obtener datos dinámicos y brinda la flexibilidad necesaria para ser
        reutilizado como plantilla en futuros desarrollos. Además, se enfoca en
        mejorar las habilidades de estilado mediante el uso de{" "}
        <span className="text-sky-400">Tailwind CSS</span>.
      </p>
      <Link
        href="https://github.com/floreesleo"
        target="_blank"
        className="text-xl text-purple-500"
      >
        - floreesleo
      </Link>
    </div>
  );
}
