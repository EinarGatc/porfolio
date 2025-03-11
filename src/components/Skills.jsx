export const TechnologicalSkill = () => {
    const skills = [
        { 
          name: "Python", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
        },
        { 
          name: "C++", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" 
        },
        { 
          name: "C#", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
        },
        { 
          name: "Java", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
        },
        { 
          name: "JavaScript", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "TypeScript", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
        },
        {
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        },
        { 
          name: "Firebase", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" 
        },
        { 
          name: "MongoDB", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
        },
        { 
          name: "PostgreSQL", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
        },
        { 
          name: "React", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" 
        },
        { 
          name: "Node.js", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" 
        },
        { 
          name: "AWS", 
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
        },
        { 
            name: "Flask", 
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
        },
    ];

    return (
        <div className="w-full"> 
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
                <div 
                key={index} 
                className="flex flex-col items-center"
                >
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                    <img 
                    src={skill.img} 
                    alt={`${skill.name} icon`} 
                    className="w-16 h-16 object-contain"
                    />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
                </div>
            ))}
            </div>
        </div>
    )
}