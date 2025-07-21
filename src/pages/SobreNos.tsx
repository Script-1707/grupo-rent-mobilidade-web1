import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Shield,
  Leaf,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const valores = [
  {
    icone: Shield,
    titulo: 'Integridade',
    descricao: 'Transparência e honestidade em todas as nossas relações comerciais e pessoais.'
  },
  {
    icone: Award,
    titulo: 'Qualidade',
    descricao: 'Mantemos os mais altos padrões em nossa frota e atendimento ao cliente.'
  },
  {
    icone: Users,
    titulo: 'Foco no Cliente',
    descricao: 'O cliente está sempre no centro de todas as nossas decisões e ações.'
  },
  {
    icone: TrendingUp,
    titulo: 'Inovação',
    descricao: 'Buscamos constantemente novas formas de melhorar nossos serviços.'
  },
  {
    icone: Heart,
    titulo: 'Responsabilidade Social',
    descricao: 'Contribuímos ativamente para o desenvolvimento da nossa comunidade.'
  },
  {
    icone: Leaf,
    titulo: 'Responsabilidade Ambiental',
    descricao: 'Promovemos práticas sustentáveis em todas as nossas operações.'
  }
];

const diferenciais = [
  'Frota renovada constantemente com os melhores modelos',
  'Manutenção preventiva rigorosa em todos os veículos',
  'Equipa técnica altamente qualificada e experiente',
  'Atendimento personalizado 24 horas por dia',
  'Preços competitivos e condições flexíveis',
  'Cobertura de seguro completa em todos os veículos',
  'Entrega e recolha gratuita em Luanda',
  'Suporte técnico em todo o território nacional'
];

const equipa = [
  {
    nome: 'António Silva',
    cargo: 'Diretor Geral',
    descricao: 'Mais de 15 anos de experiência no setor automóvel.',
    imagem: null
  },
  {
    nome: 'Maria Santos',
    cargo: 'Diretora Comercial',
    descricao: 'Especialista em relações comerciais e atendimento ao cliente.',
    imagem: null
  },
  {
    nome: 'João Pedro',
    cargo: 'Diretor Técnico',
    descricao: 'Responsável pela manutenção e qualidade da frota.',
    imagem: null
  },
  {
    nome: 'Ana Costa',
    cargo: 'Diretora de Marketing',
    descricao: 'Estratégias de comunicação e desenvolvimento de marca.',
    imagem: null
  }
];

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradiente-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a EV Grupo Rent Car
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Há mais de 10 anos, somos a referência em aluguer de viaturas em Angola, 
              oferecendo soluções de mobilidade seguras, confortáveis e acessíveis para 
              empresas e particulares.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="titulo-secao">Nossa História</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A EV Grupo Rent Car nasceu em 2014 com o objetivo de revolucionar o 
                  setor de aluguer de viaturas em Angola. Fundada por uma equipa de 
                  profissionais experientes no setor automóvel, começámos com uma pequena 
                  frota de 20 veículos.
                </p>
                <p>
                  Ao longo dos anos, crescemos organicamente, sempre priorizando a 
                  qualidade dos nossos serviços e a satisfação dos nossos clientes. 
                  Hoje, somos uma das maiores empresas do setor em Angola, com mais 
                  de 500 veículos em nossa frota.
                </p>
                <p>
                  Nossa jornada é marcada por parcerias estratégicas com as principais 
                  marcas automóveis mundiais e por investimentos constantes em tecnologia 
                  e formação da nossa equipa.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 h-96">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4">10+</div>
                    <div className="text-2xl font-semibold text-secondary">Anos</div>
                    <div className="text-muted-foreground">de Excelência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Missão */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 mx-auto">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer soluções de mobilidade seguras, confortáveis e acessíveis, 
                superando as expectativas dos nossos clientes através de um serviço 
                de excelência e uma frota de qualidade superior.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 mx-auto">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência nacional em aluguer de viaturas, reconhecida pela 
                qualidade dos nossos serviços, inovação tecnológica e contribuição 
                para o desenvolvimento sustentável do país.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-2xl mb-6 mx-auto">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossos valores fundamentais guiam todas as nossas ações: 
                integridade, qualidade, foco no cliente, inovação, responsabilidade 
                social e ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="titulo-secao">Nossos Valores</h2>
            <p className="subtitulo max-w-3xl mx-auto">
              Os princípios que nos orientam e definem quem somos como empresa 
              e como nos relacionamos com nossos clientes e comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, indice) => (
              <div key={indice} className="card-elegante text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <valor.icone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {valor.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="titulo-secao">Nossos Diferenciais</h2>
              <p className="subtitulo mb-8">
                O que nos torna únicos no mercado angolano de aluguer de viaturas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diferenciais.map((diferencial, indice) => (
                  <div key={indice} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {diferencial}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elegante">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Certificação ISO</h3>
                    <p className="text-muted-foreground text-sm">Qualidade internacional</p>
                  </div>
                </div>
              </div>

              <div className="card-elegante">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Equipa Especializada</h3>
                    <p className="text-muted-foreground text-sm">Profissionais qualificados</p>
                  </div>
                </div>
              </div>

              <div className="card-elegante">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Seguro Completo</h3>
                    <p className="text-muted-foreground text-sm">Proteção total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="titulo-secao">Nossa Equipa</h2>
            <p className="subtitulo max-w-3xl mx-auto">
              Conheça os profissionais dedicados que fazem da EV Grupo Rent Car 
              uma empresa de excelência no mercado angolano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipa.map((membro, indice) => (
              <div key={indice} className="card-elegante text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {membro.nome.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {membro.nome}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {membro.cargo}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {membro.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsabilidade Social */}
      <section className="py-20 gradiente-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Responsabilidade Social
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Acreditamos que o sucesso empresarial deve andar de mãos dadas 
              com o desenvolvimento da comunidade e a preservação do meio ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Projetos Comunitários</h3>
              <p className="text-white/90 leading-relaxed">
                Apoiamos iniciativas educativas e de desenvolvimento em 
                comunidades carenciadas de Luanda.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Patrocínios Desportivos</h3>
              <p className="text-white/90 leading-relaxed">
                Patrocinamos equipas e eventos desportivos locais, 
                promovendo o desporto nacional.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustentabilidade</h3>
              <p className="text-white/90 leading-relaxed">
                Investimos em veículos mais eficientes e práticas 
                ambientalmente responsáveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;