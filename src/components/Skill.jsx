import React from 'react'
import { skillText } from "../constants"

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__tiltle">
          challenge <em>나의 도전</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((skills, key) => (
            <>
              <span key={key}>{key + 1}.</span>
              <h3>{skills.title}</h3>
              <p>{skills.desc}</p>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
