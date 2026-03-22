import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Древний мир",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Реклама появилась задолго до изобретения печатного станка. Египтяне, греки и римляне 
            активно использовали устные объявления, надписи на стенах и вывески для привлечения покупателей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Папирусы с объявлениями в Древнем Египте (3000 до н.э.)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Глашатаи и торговые зазывалы на рынках Рима и Греции
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Настенные надписи в Помпеях — прародители современных баннеров
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "XIX–XX век: Золотой век",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Промышленная революция породила массовое производство — и массовую рекламу. 
            Газеты, плакаты, радио и телевидение последовательно захватывали внимание потребителей. 
            Родились рекламные агентства и профессия копирайтера.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Первые рекламные агентства в США (1840-е)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Цветные плакаты Тулуз-Лотрека и Альфонса Мухи
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Первая телереклама в США — 10 секунд за $9 (1941)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Цифровая эпоха",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            С 1994 года интернет перевернул рекламный рынок. Появились таргетинг, 
            контекстная реклама, социальные сети и инфлюенсеры. 
            Сегодня мировой рынок digital-рекламы превышает $600 млрд в год.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Первый баннер в интернете на HotWired (1994)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Google AdWords и революция контекстной рекламы (2000)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ИИ и нейромаркетинг — реклама будущего уже сегодня
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Эпохи рекламы</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            5000 лет истории — от папирусных объявлений Древнего Египта до алгоритмов искусственного интеллекта.
            Каждая эпоха меняла правила игры.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}