import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Когда появилась первая реклама?",
      answer:
        "Считается, что первой рекламой был египетский папирус около 3000 лет до н.э. — объявление о поиске сбежавшего раба с обещанием вознаграждения. Также сохранились настенные надписи в Помпеях, рекламирующие таверны, гладиаторские бои и услуги ремесленников.",
    },
    {
      question: "Что такое «Мэдисон-авеню» и почему она важна?",
      answer:
        "Мэдисон-авеню в Нью-Йорке — символ американской рекламной индустрии. В 1950–60-х годах там концентрировались крупнейшие агентства. Именно этот период вдохновил сериал «Безумцы» (Mad Men) и называется «Золотым веком» рекламы.",
    },
    {
      question: "Как психология повлияла на рекламу?",
      answer:
        "Эдвард Бернайс, племянник Зигмунда Фрейда, применил психоанализ к PR и рекламе в 1920-х. Он первым начал продавать не товары, а образ жизни и эмоции. Его кампании для Американского табачного общества сделали курение «символом женской независимости».",
    },
    {
      question: "Как изменилась реклама с приходом интернета?",
      answer:
        "В 1994 году появился первый баннер — CTR составил 44%. Сегодня средний CTR менее 0,1%. Google изобрёл контекстную рекламу (AdWords, 2000), Facebook — таргетинг по интересам (2007). Это революционизировало точность попадания в аудиторию.",
    },
    {
      question: "Что такое нейромаркетинг?",
      answer:
        "Нейромаркетинг изучает реакции мозга на рекламные стимулы с помощью МРТ, ЭЭГ и айтрекинга. Выясняется, что 95% решений о покупке принимаются бессознательно. Это направление активно развивается с 2000-х годов.",
    },
    {
      question: "Какой объём рынка рекламы сегодня?",
      answer:
        "Мировой рынок рекламы в 2024 году превысил $900 млрд. Digital-реклама занимает более 65% от этой суммы. Google и Meta контролируют около 50% мирового digital-рынка.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые интересные вопросы об истории рекламы — от древних объявлений до алгоритмов ИИ.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}