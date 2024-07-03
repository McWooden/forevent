import Confetti from "./Confetti"
import Maps from "./Map"
import Navbar from "./Navbar"


function App() {
  

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar/>
      <div className="flex-1 bg-neutral-100 overflow-y-auto overflow-x-hidden p-2 flex flex-col items-center">

        <div className="p-4 flex flex-col gap-4 max-w-lg w-full">
          <h3 className="text-xl font-semibold text-neutral-700">Selamat atas pernikahannya! 💍</h3>
          <div style={{backgroundImage: 'url(/blanktext.webp)'}} className="p-2 bg-center bg-cover grid place-items-center h-full rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl shadow">
            <div className="py-28">
              <p className="text-5xl leading-3" style={{fontFamily: "'Motterdam', sans-serif"}}>Tono <span className="opacity-0">-</span></p>
              <p className="text-5xl leading-8 text-center text-yellow-600" style={{fontFamily: "'Motterdam', sans-serif"}}>&</p>
              <p className="text-5xl text-right leading-3" style={{fontFamily: "'Motterdam', sans-serif"}}><span className="opacity-0">-</span> Putri</p>
            </div>
          </div>
          <p className="text-neutral-700">🗓️ Kamis, 4 Juli 2024</p>
        </div>

        <Confetti/>

        <div className="flex flex-col gap-2 p-4 relative my-6 max-w-lg">
          <p className="absolute w-12 -right-6 top-2 opacity-75 text-5xl font-semibold">&quot;</p>

          <div className="flex flex-col gap-4 text-neutral-600">
            <p>📜 Kepada pangeran Mas tono dan Putri,</p>
            
            <p>Dalam keagungan dan kemuliaan hari ini, saya dengan tulus menyampaikan selamat atas pernikahan pangeran. Semoga ikatan suci ini dilimpahi keberkahan dan kebahagiaan yang abadi, seperti yang dikehendaki langit dan bumi. 🌇🌏</p>
            <p>Sebagai bagian dari kerajaan, saya mendoakan agar kerajaan yang dibangun selalu dihiasi dengan kehormatan, keadilan, dan cinta kasih. Semoga pangeran selalu dikelilingi oleh kemakmuran, kedamaian, dan kebijaksanaan dalam setiap langkah kehidupan bersama. 🏰</p>
            <p>Dengan segala hormat dan kasih sayang, saya berharap semoga pangeran dapat menjalani kehidupan baru dengan penuh kebahagiaan dan kemuliaan, serta selalu dalam lindungan para malaikat. 😶‍🌫️</p>
            <p>Selamat menempuh hidup baru dan semoga selalu dalam rahmat Ilahi. Saya tunggu ayam dua porsinya! ☝️😋</p>
          </div>
          <p className="text-neutral-700 font-semibold pt-4">- Huddin 👑</p>
        </div>

        <Maps/>

      </div>
    </div>
  )
}

export default App
