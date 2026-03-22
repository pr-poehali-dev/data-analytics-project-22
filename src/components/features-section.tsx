import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Первая реклама в истории",
    description: "Древнеегипетский папирус 3000 лет до н.э. — объявление о поиске сбежавшего раба. Первый известный рекламный текст в истории человечества.",
    icon: "brain",
    badge: "Древность",
  },
  {
    title: "Рождение плаката",
    description: "В XIX веке Жюль Шере создал первые цветные рекламные литографии. Улицы Парижа превратились в галереи искусства.",
    icon: "globe",
    badge: "XIX век",
  },
  {
    title: "Эпоха радио и ТВ",
    description: "1920–1960-е: рекламные джинглы захватили умы миллионов. «Раньше продавали товар — теперь продают образ жизни».",
    icon: "zap",
    badge: "XX век",
  },
  {
    title: "Психология убеждения",
    description: "Фрейд вдохновил Бернайса — отца PR. Реклама научилась обращаться к бессознательному, а не к разуму потребителя.",
    icon: "lock",
    badge: "Психология",
  },
  {
    title: "Цифровая революция",
    description: "Интернет-реклама с 1994 года изменила всё. Первый баннер на HotWired собрал 44% кликов — сегодня норма менее 0,1%.",
    icon: "link",
    badge: "Диджитал",
  },
  {
    title: "Реклама сегодня",
    description: "ИИ, персонализация и нейромаркетинг. Алгоритмы знают о вас больше, чем вы сами — и используют это для точного таргетинга.",
    icon: "target",
    badge: "Будущее",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans" id="features">Ключевые факты и вехи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            6 поворотных моментов, которые навсегда изменили рекламную индустрию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}