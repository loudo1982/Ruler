



const { ApolloServer, gql } = require('apollo-server');






//Schema

const typeDefs= gql`

type Curso {
    titulo:String
    tecnologia:String
}
enum Choix {
    BLUE
    YELLOW
    RED
    GREEN
    
}
type Choixretour {
    choix:String
    
}

input ChoixEleve {
    choix:Choix 
  
  }

type Query {
    obtenerCursos : [Curso]
    obtenerChoix:[Choixretour]
   
}

type Mutation {
    assignerChoix(input:ChoixEleve):[Choixretour]
  }


`

const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    }, 
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];

const leschoix = [
    
];


//resolvers

const resolvers={
    Query:{
        obtenerCursos: ()=>cursos,
        obtenerChoix: ()=>leschoix,
    
        
       
       

        
    },
    Mutation:{
        assignerChoix:(_,{input})=>{leschoix.push(input);
            console.log(input)
        return leschoix}
    }
   
    
}



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});