import React from 'react'
import MembershipDetails from './MembershipDetails';
import SportDescription from './SportDescription';
import Metrics from './Metrics';
import PersonalInfo from './PersonalInfo';
import ViewerNotes from './ViewerNotes';

const player = {
  "membership":"Master",
  "manager":"Don King",
  "contracts":"Hasta el 2020",
  "description":"Medio de contención de 21 años, jugando actualmente en la liga inter-clubes categoría libre con el equipo París, cómo sus principales atributos son; juega con ambas piernas, tiene gran potencia disparo de media distancia, habilidoso, muy buena técnica de control de balón, gran fondo físico y gran velocidad de arranque. Miembro desde julio de 2019, hoy en día tiene 40 retos cumplidos y 10 vídeos agregados.",
  "age":21,
  "nationality":"Mexicano",
  "location":"Múnich, Alemania",
  "height":"1,80",
  "weight":"75",
  "profile":"Derecho e izquierdo",
  "position":"Medio campo alternativa: delantero",
  "effectiveness":"85",
  "speed":"5 - 7",
  "qualities":{
    "excellent":["Velocidad", "Agilidad", "Fortaleza", "Drible"],
    "good":["Coordinación", "Elasticidad", "Resistencia", "Potencia de golpeo", "Pressing", "Cobertura"],
    "soso":["Marcación", "Achique", "Desmarque"],
    "struggle":["Anticipación", "Conducción", "Cabeceo"],
    "develop":["Precisión en el pase"],
  },
  "metrics":{
    "match":{
      "heartRateAVG":85,
      "workload":56,
      "jumps":23,
      "inactivity":120,
      "totalDistance":10,
      "accelerations":7,
      "decelerations":7,
    },
    "test":{
      "speedAVG":5,
      "hihgSpeedDistance":1,
      "distanceTime":20,
      "jumpHeight":"3,5",
      "maxSpeed":7,
    },
    "circuit":{
      "maxSpeed":7,
      "repetitionTime":"00.60",
      "repetitionPrecision":80,
      "powerReductionRepetition":80,
    },
    "psycho":{
      "attitude":"Colaborativa"
    }
  }
}

const SportRecord = () => {
  return(
    <>
      <MembershipDetails player={player} />
      <SportDescription player={player} />
      <Metrics player={player} />
      <PersonalInfo />
      <ViewerNotes />
    </>
  )
}

export default SportRecord