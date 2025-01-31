import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Utilisation du useEffect pour que ça séxecute une fois que le composant est monté et à chaque fois que l'url change
  // Sans useEffect, le code serait exécuté à chaque rendu du composant
  useEffect(() => {
    // Fetch est une fonction asynchrone qui renvoie une promesse (API native du navigateur)
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors de la récupération des données');
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;