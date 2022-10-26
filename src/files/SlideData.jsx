import { GiOpenTreasureChest } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";




export const SlideData = [
 
        {
          path: "achados",
          nome: "Achados",
          icone: <GiOpenTreasureChest />,
        },
        {
          path: "perdidos",
          nome: "Perdidos",
          icone: <MdPersonSearch />,
        },
        {
          path: "perdidos_achados",
          nome: "Entregues",
          icone: <FaHandshake />,
        },
        

]