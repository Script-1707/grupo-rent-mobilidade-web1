import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  Users, 
  Shield, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Phone,
  MapPin,
  Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSlider from '@/components/comum/HeroSlider';

const categoriasCarros = [
  {
    id: 'economico',
    nome: 'Económico',
    descricao: 'Carros eficientes e acessíveis para o dia a dia',
    icone: Car,
    preco: 'Desde 8.000 Kz/dia',
    destaque: false
  },
  {
    id: 'intermedio',
    nome: 'Intermédio',
    descricao: 'Conforto e economia em perfeito equilíbrio',
    icone: Car,
    preco: 'Desde 12.000 Kz/dia',
    destaque: false
  },
  {
    id: 'luxo',
    nome: 'Luxo',
    descricao: 'Viaturas premium para ocasiões especiais',
    icone: Star,
    preco: 'Desde 25.000 Kz/dia',
    destaque: true
  },
  {
    id: 'suv',
    nome: 'SUV',
    descricao: 'Versatilidade e robustez para qualquer terreno',
    icone: Car,
    preco: 'Desde 18.000 Kz/dia',
    destaque: false
  },
  {
    id: 'pickup',
    nome: 'Pick-Up',
    descricao: 'Força e capacidade para trabalho e aventura',
    icone: Car,
    preco: 'Desde 15.000 Kz/dia',
    destaque: false
  },
  {
    id: 'van',
    nome: 'Van & Grupo',
    descricao: 'Espaço para grandes grupos e famílias',
    icone: Users,
    preco: 'Desde 20.000 Kz/dia',
    destaque: false
  }
];

const depoimentos = [
  {
    id: 1,
    nome: 'João Manuel',
    cargo: 'Empresário',
    texto: 'Serviço pontual, carros impecáveis e equipa atenciosa. Recomendo sem reservas!',
    avaliacao: 5,
    foto: null
  },
  {
    id: 2,
    nome: 'Dra. Ana Cristina',
    cargo: 'Médica',
    texto: 'Recomendo a EV Grupo para viagens de negócios e eventos. Profissionalismo exemplar.',
    avaliacao: 5,
    foto: null
  },
  {
    id: 3,
    nome: 'Carlos Silva',
    cargo: 'Diretor de Marketing',
    texto: 'Excelente atendimento e frota sempre renovada. Nossa empresa confia na EV Grupo.',
    avaliacao: 5,
    foto: null
  }
];

const estatisticas = [
  { numero: '10+', label: 'Anos de Experiência' },
  { numero: '500+', label: 'Carros na Frota' },
  { numero: '5000+', label: 'Clientes Satisfeitos' },
  { numero: '24/7', label: 'Suporte Disponível' }
];

const PaginaInicial = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Estatísticas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, indice) => (
              <div key={indice} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.numero}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques da Frota */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="titulo-secao">Nossa Frota</h2>
            <p className="subtitulo max-w-3xl mx-auto">
              Descubra nossa ampla variedade de viaturas, desde carros económicos até 
              veículos de luxo, todos mantidos nos mais altos padrões de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriasCarros.map((categoria) => (
              <div 
                key={categoria.id}
                className={`card-elegante group cursor-pointer ${
                  categoria.destaque ? 'ring-2 ring-primary' : ''
                }`}
              >
                {categoria.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <categoria.icone className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {categoria.nome}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {categoria.descricao}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {categoria.preco}
                  </span>
                  <Link to={`/frota?categoria=${categoria.id}`}>
                    <Button variant="ghost" className="group">
                      Ver Carros
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/frota">
              <Button className="botao-primario">
                Ver Toda a Frota
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="titulo-secao">O que Dizem Nossos Clientes</h2>
            <p className="subtitulo max-w-3xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior recompensa. 
              Veja o que eles têm a dizer sobre nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="card-elegante">
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{depoimento.texto}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {depoimento.nome.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">
                      {depoimento.nome}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {depoimento.cargo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamadas Rápidas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="titulo-secao">Contacte-nos Agora</h2>
            <p className="subtitulo max-w-3xl mx-auto">
              Estamos prontos para atendê-lo. Escolha a forma mais conveniente de nos contactar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/244924000000"
              className="card-elegante text-center group hover:bg-green-50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                Fale connosco instantaneamente pelo WhatsApp
              </p>
              <span className="text-green-600 font-semibold">+244 976 045 538</span>
            </a>

            {/* Localização */}
            <Link to="/contactos" className="card-elegante text-center group hover:bg-blue-50">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Localização</h3>
              <p className="text-muted-foreground mb-4">
                Visite nosso showroom em Luanda
              </p>
              <span className="text-blue-600 font-semibold">Ver no Mapa</span>
            </Link>

            {/* Instagram */}
            <a 
              href="#"
              className="card-elegante text-center group hover:bg-pink-50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-6 mx-auto group-hover:bg-pink-200 transition-colors">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Instagram</h3>
              <p className="text-muted-foreground mb-4">
                Siga-nos para novidades e promoções
              </p>
              <span className="text-pink-600 font-semibold">@evgruporentcar</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 gradiente-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para a Sua Próxima Viagem?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Reserve agora e desfrute da melhor experiência em aluguer de viaturas em Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservas">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold rounded-xl">
                Fazer Reserva
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/frota">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-6 text-lg rounded-xl bg-transparent"
              >
                Explorar Frota
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicial;