// хук, основной для работы с данными
import { useState } from "react"

const HomePage = () => <div>Домашняя страница</div>

const WorksPage = () => <div>Страница с проектами</div>


function App() {
  // внутри компонента (внутри App) создаем саму переменную, функцию для изменения
  // внутри скобок - начальное значение
  
  const [counter, setCounter] = useState(0)
  const [flag,setFlag] = useState(true);

  return (
    <>
    <HomePage />
     {/* само значение можно выводить прямо на страницу */}
     {counter}
     {/* на клик кнопки вызываем увеличение на 1 */}
     <button onClick={() => setCounter(counter + 1)}>+1</button>
     <button onClick={() => setCounter(counter - 1)}>-1</button>
     <button style={{color: flag ? "red":"blue"}} onClick={() => setFlag(!flag)}>Переключение bool</button>     
    </>
  )
}

export default App

// Задание такое: с помощью инструмента useState нужно переключать страницы