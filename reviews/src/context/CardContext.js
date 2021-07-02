import React,{useState,createContext} from 'react';

export const CardContext = createContext();

const CardContextProvider = ({children}) => {
   
    //state
    
    const [cards,setCards] = useState([
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
              "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
          },
          {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
              'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
          },
          {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
              'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
          },
          {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
              'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
          },
    ]);
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = cards[index];

    //methods
    const checkNumber = (number) => {
        console.log(number,cards.length-1)
        if(number > cards.length-1)   return 0
        if(number < 0)  return cards.length-1
        return number
    }
    const preNumber = () => {
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    const nextNumber = () => {
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const randomNumber = () => {
        
        setIndex((index) =>{
            const random = Math.floor(Math.random() * cards.length);
            return checkNumber(random)
        })
    }
    //Data
    const CardContextData = {
        cards,name,job,image,text,preNumber,nextNumber,randomNumber
    }
    return (
        <CardContext.Provider value={CardContextData}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider