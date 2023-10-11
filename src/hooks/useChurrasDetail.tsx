"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TChurras } from "@/mocks/type";
import { ChurrasContext } from "@/context/churras";
import { CChurras } from "@/constants/churras";

export function useChurrasDetail() {
  const params = useParams();
  const { churras, setChurras } = useContext(ChurrasContext);
  const [currentChurras, setCurrentChurras] = useState({} as TChurras);
  const [name, setName] = useState("");
  const [contrib, setContrib] = useState(CChurras.WITHOUT_DRINKS);
  const [withDrinks, setWithDrinks] = useState(false);

  const getPersonIndex = (personId: number): number => {
    return currentChurras.persons.findIndex(({ id }) => {
      return id === personId;
    });
  };

  const getChurrasIndex = (): number => {
    return churras.findIndex(({ id }) => {
      return id === currentChurras?.id;
    });
  };

  const getChurrasObj = (id: string | string[]): TChurras | undefined => {
    return churras.find((item: TChurras) => {
      return item.id === +id;
    });
  };

  useEffect(() => {
    if (params.slug) {
      const current = getChurrasObj(params.slug);
      setCurrentChurras(current as TChurras);
    }
  }, [params.slug]);

  useEffect(() => {
    if (withDrinks) {
      setContrib(CChurras.WITH_DRINKS);
      return;
    }

    setContrib(CChurras.WITHOUT_DRINKS);
  }, [withDrinks]);

  const check = (personId: number) => {
    const personIndex = getPersonIndex(personId);

    const churrasIndex = getChurrasIndex();

    const person = currentChurras.persons[personIndex];

    person.hasContributed = !person.hasContributed;

    if (person.hasContributed) {
      currentChurras.total += person.contribution;
    } else {
      currentChurras.total -= person.contribution;
    }

    churras[churrasIndex] = currentChurras;

    setCurrentChurras({ ...currentChurras });
    setChurras([...churras]);
  };

  const createPersonObject = () => {
    const id =
      currentChurras.persons.length > 0
        ? currentChurras.persons[currentChurras.persons.length - 1].id + 1
        : 1;
    return {
      id,
      name: name ? name : `Convidado ${id}`,
      contribution: contrib,
      hasContributed: false,
    };
  };

  const addPerson = () => {
    const churrasIndex = getChurrasIndex();

    currentChurras.persons.push(createPersonObject());
    currentChurras.invitees += 1;

    churras[churrasIndex] = currentChurras;

    setCurrentChurras({ ...currentChurras });
    setChurras([...churras]);
  };

  const deletePerson = (personId: number) => {
    const index = getPersonIndex(personId);
    const churrasIndex = getChurrasIndex();

    const person = currentChurras.persons[index];

    if (person.hasContributed) {
      currentChurras.total -= person.contribution;
    }

    currentChurras.invitees -= 1;
    currentChurras.persons.splice(index, 1);

    churras[churrasIndex] = currentChurras;

    setCurrentChurras({ ...currentChurras });
    setChurras([...churras]);
  };

  return {
    check,
    currentChurras,
    name,
    setName,
    contrib,
    withDrinks,
    setWithDrinks,
    addPerson,
    deletePerson,
  };
}
