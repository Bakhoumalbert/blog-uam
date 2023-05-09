export const Sidebar = () => {
  return (
    <aside className=" sticky top-20 col-span-4 flex h-full w-full flex-col space-y-4 p-6">
      {/* <div>
        <h3 className="my-6 text-base font-semibold md:text-lg">
          People you might be interested
        </h3>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between space-x-5 md:flex-row"
            >
              <div className="flex flex-row items-center space-x-2">
                <div className="h-8 w-8 flex-none rounded-full bg-gray-300 md:h-10 md:w-10"></div>
                <div>
                  <p className="text-sm font-bold text-gray-900 md:text-base">
                    Albert Bakhoum
                  </p>
                  <p className="text-xs md:text-sm">
                    Student, ingenieur & developer
                  </p>
                </div>
              </div>
              <div>
                <button className="flex items-center space-x-3 rounded border border-gray-400/50 px-2 py-1 transition hover:border-gray-900 hover:text-gray-900 md:px-4 md:py-2">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="my-6 space-y-8">
        <h3 className="text-base font-semibold md:text-lg">
          Your reading list
        </h3>
        <div className="flex w-full flex-col justify-center space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="group flex flex-col space-x-6 pb-2 last:border-none"
            >
              <div className="grid w-full grid-cols-12 gap-4">
                <div className="col-span-4">
                  <div className="aspect-square h-full w-full rounded-xl bg-gray-300 transition hover:scale-105 hover:shadow-xl"></div>
                </div>
                <div className="col-span-8">
                  <p className="text-sm font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                    All about Nextjs and the server-side-rendering
                  </p>
                  <p className="line-clamp-3 text-ellipsis   whitespace-break-spaces  break-words text-sm text-gray-500">
                    Maintenant comment fonctionne NextJS : Contrairement à
                    React, au lieu de demander au serveur du rendu JavaScript,
                    le serveur renvoie du html que lui calcul à partir du
                    JavaScript
                  </p>
                  <div className="flex w-full flex-row items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-400 md:h-5 md:w-5"></div>
                    <div className="flex flex-row items-center space-x-4">
                      <p className="font-semibold">Albert Bakhoum &#x2022;</p>
                      <p className="text-sm"> Dec. 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
