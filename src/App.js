import logo from './logo.svg';
import './App.css';

import Massage from './Component/Massage/Massage.Component';
import { MassgeContext } from './Component/Context/MassageContext';
import Home from './Component/Home/Home.Componenet';

function App() {
  return (
    <div>
      <MassgeContext>
     <Home/>
      </MassgeContext>
      {/* <Header/>  */}
     {/* <div className='card1'>
<Users name="Keren" lastName="Hailu" age={23}/>
     </div>
<div className='card2'>
<Users name="Gal" lastName="Shir" age={29}/>
</div>
<div className='card3'>
<Users name="Dan" lastName="Alon" age={24}/>
</div>
<div className='card4'>
<Users name="Shirel" lastName="Shalom" age={21}/>
</div>
<div className='card5'>
<Users name="Aviv" lastName="Gefen" age={20}/>
</div>
<Footer/> */}
        <img src={logo} className="App-logo" alt="logo" />
        
     
    </div>
  );
}

export default App;

// בריאקט היו משתמשים רק בקלאסים , כי שם יש לנו את הפריבילגיה 
// לעשות כל כך הרבה דברים בניגוד לפונקציות ,
// וריאקט הוקס באה לתת לנו את האופציה להשתמש בפונקציות בדיוק כמו בקלאסים ,
// עם אותם תנאים ואותם פריבילגיות ,
// בדרכים קצרות ומהירות יותר ,
// כמו לדוגמא עם היוז סטייט , 
// שנותנת לנו לעדכן דבר ספציפי שאפשרי לעדכן 
// במקום לרנדר את כל הדף ויש עוד מגוון הוקים ,
// כמו לדוגמא לשנות דברים ספציפים לפני הרנדור או אחרי ,
// לתת לנו שליטה מלאה על השינויים 