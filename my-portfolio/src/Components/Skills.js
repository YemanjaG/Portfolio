import React from 'react';
import '../CSS/Skills.css';

import {ReactComponent as CIcon} from '../Assets/c.svg';
import {ReactComponent as CPPIcon} from '../Assets/cplusplus.svg';
import {ReactComponent as CSSIcon} from '../Assets/css3.svg';
import {ReactComponent as HTMLIcon} from '../Assets/html5.svg';
import {ReactComponent as ReactIcon} from '../Assets/react.svg';
import {ReactComponent as MongoIcon} from '../Assets/mongodb.svg';
import {ReactComponent as NodeJsIcon} from '../Assets/nodedotjs.svg';

const skills = [
  { name: 'C', icon: CIcon, link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: 'C++', icon: CPPIcon, link: "https://en.wikipedia.org/wiki/C%2B%2B" },
  { name: 'React Native', icon: ReactIcon, link: "https://reactnative.dev/" },
  { name: 'ReactJS', icon: ReactIcon, link: "https://reactjs.org/" },
  { name: 'NodeJS', icon: NodeJsIcon, link: "https://nodejs.org/" },
  { name: 'MongoDB', icon: MongoIcon, link: "https://www.mongodb.com/" },
];

const Skills = () => {
    return (
      <div className="skills">
        <h2>Compétences</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                    <skill.icon className="skill-icon" />
                </a>
              {/* <p>{skill.name}</p> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Skills;
