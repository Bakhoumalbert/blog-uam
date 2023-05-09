export const SinglePost = () => {
  return (
    <div className="col-span-9 h-full w-full space-y-4 border-r border-gray-300 p-12">
      <div className="h-72 w-full rounded-xl bg-gray-300"></div>
      <h1>Titre</h1>
      <div className="flex flex-row justify-between">
        <p>Autor : Albert</p>
        <p>created at Dec 22</p>
      </div>
      <p className="text-ellipsis text-[#444]">
        Il sagit dune erreur dexécution qui se produit lorsque vous essayez
        dexécuter une application Flask qui utilise SQLAlchemy pour se connecter
        à une base de données. Le message derreur indique que vous navez pas
        correctement défini les variables de configuration
        SQLALCHEMY_DATABASE_URI ou SQLALCHEMY_BINDS. Pour corriger cette erreur,
        vous devez vous assurer que vous avez défini les variables de
        configuration correctes pour votre connexion à la base de données. Vous
        pouvez définir les variables de configuration dans le fichier de
        configuration de votre application Flask ou dans vos variables
        denvironnement. Voici un exemple de la façon de définir la variable de
        configuration dans le fichier de configuration de votre application
        Flask :
      </p>
    </div>
  );
};
