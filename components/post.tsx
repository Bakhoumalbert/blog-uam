import Link from "next/link";

export const Post = () => {
  return (
    <div className="group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none">
      <div className="flex w-full items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-400 md:h-10 md:w-10"></div>
        <div>
          <p className="font-semibold">Albert Bakhoum &#x2022; 22 Dec. 2022</p>
          <p className="text-sm">Student, ingenieur & developer</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-4">
        <div className="col-span-8">
          <p className="text-xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
            <Link href="/post">
              All about Nextjs and the server-side-rendering
            </Link>
          </p>
          <p className="line-clamp-6 text-ellipsis   whitespace-break-spaces  break-words text-sm text-gray-500">
            Maintenant comment fonctionne NextJS : Contrairement à React, au
            lieu de demander au serveur du rendu JavaScript, le serveur renvoie
            du html que lui calcul à partir du JavaScript Maintenant comment
            fonctionne NextJS : Contrairement à React, au lieu de demander au
            serveur du rendu JavaScript, le serveur renvoie du html que lui
            calcul à partir du JavaScript
          </p>
        </div>
        <div className="col-span-4">
          <div className="h-full w-full rounded-xl bg-gray-300 transition hover:scale-105 hover:shadow-xl"></div>
        </div>
      </div>
      <div>
        <div className="flex w-full items-center justify-start space-x-4">
          <div className="flex items-center space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-gray-200/50 px-5 py-1">
                tag {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
