import React from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  Stethoscope, 
  Syringe, 
  Scissors, 
  ShoppingBag, 
  HeartPulse,
  MapPin,
  Instagram,
  ChevronRight,
  Star,
  ShieldCheck
} from 'lucide-react';

const WHATSAPP_NUMBER = "5564999118181";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_NUMBER = "064999118181";
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen selection:bg-brand-500 selection:text-white">
      {/* Floating Emergency Button */}
      <a 
        href={PHONE_LINK}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-alert-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-alert-600/40 hover:bg-alert-700 transition-all hover:scale-105 group"
      >
        <div className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-alert-600 items-center justify-center">
            <PhoneCall size={12} className="animate-pulse" />
          </span>
        </div>
        <span className="font-display font-bold tracking-wide uppercase text-sm">Plantão 24h - Ligar Agora</span>
      </a>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="text-brand-600" size={32} />
            <span className="font-display font-bold text-2xl tracking-tight text-brand-900">CLINICÃO<span className="text-brand-500">pet</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Serviços</a>
            <a href="#equipe" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Corpo Clínico</a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Depoimentos</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-600 bg-brand-50 px-5 py-2.5 rounded-full hover:bg-brand-100 transition-colors"
            >
              <MessageCircle size={18} />
              Agendar Consulta
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-50 text-alert-600 text-sm font-semibold mb-6 border border-alert-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-alert-500"></span>
              </span>
              Emergência Veterinária 24 Horas
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Saúde e bem-estar <span className="text-brand-600">integral</span> para o seu pet.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Cuidamos de quem você mais ama com excelência. Oferecemos atendimento clínico, cirurgias, vacinas, produtos de pet shop e um serviço impecável de banho e tosa em Catalão-GO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 bg-alert-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-alert-700 transition-colors text-lg shadow-lg shadow-alert-600/20"
              >
                <PhoneCall size={20} />
                Ligar Agora: Emergência
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-brand-600 border-2 border-brand-100 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 hover:border-brand-200 transition-colors text-lg"
              >
                <MessageCircle size={20} />
                Falar com a Equipe
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1537151608804-ea2f1ea290d0?auto=format&fit=crop&w=100&q=80" alt="Pet" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=100&q=80" alt="Pet" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=100&q=80" alt="Pet" referrerPolicy="no-referrer" />
              </div>
              <p>Centenas de vidas salvas e famílias felizes.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1000&q=80" 
              alt="Veterinário cuidando de um cachorro" 
              className="rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-[-2rem] bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Segurança Total</h4>
                  <p className="text-xs text-slate-500">Equipe altamente capacitada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossas Especialidades</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Estrutura completa para o que seu pet precisar.</h3>
            <p className="text-lg text-slate-600">Do banho relaxante à emergência de madrugada, nossa infraestrutura de alto padrão e tecnologia de ponta garantem resultados de excelência.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Emergência 24h */}
            <div className="md:col-span-2 md:row-span-2 bg-alert-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={28} className="text-white" />
                </div>
                <h4 className="text-3xl font-display font-bold mb-4">Pronto Atendimento e Emergência 24h</h4>
                <p className="text-alert-50 text-lg leading-relaxed max-w-md">
                  Nosso maior diferencial é a prontidão. Estamos sempre prontos para salvar vidas e acolher seu pet no momento de maior necessidade.
                </p>
              </div>
              <div className="relative z-10 mt-8">
                <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-white text-alert-600 px-6 py-3 rounded-full font-semibold hover:bg-alert-50 transition-colors">
                  <PhoneCall size={18} />
                  Ligar para Emergência
                </a>
              </div>
            </div>

            {/* Banho e Tosa */}
            <div className="md:col-span-2 bg-brand-50 rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="relative z-10 md:w-2/3">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-600">
                  <Scissors size={24} />
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-3">Banho, Tosa e Penteados</h4>
                <p className="text-slate-600 mb-6">
                  Atendimento carinhoso e impecável. Ambientes higienizados e produtos premium para a estética do seu pet.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
                  Marcar Banho <ChevronRight size={16} />
                </a>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=400&q=80" 
                alt="Banho em cachorro" 
                className="absolute right-0 bottom-0 w-1/3 h-full object-cover opacity-50 md:opacity-100 mask-image-linear-left"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Consultas */}
            <div className="md:col-span-1 bg-white border border-slate-100 shadow-sm rounded-[2.5rem] p-8 hover:shadow-md transition-shadow">
              <div className="bg-brand-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
                <Stethoscope size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3">Consultas Clínicas</h4>
              <p className="text-slate-600 text-sm mb-6">Avaliação completa para cães, gatos e coelhos com especialistas.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700">
                Agendar <ChevronRight size={16} />
              </a>
            </div>

            {/* Vacinação */}
            <div className="md:col-span-1 bg-white border border-slate-100 shadow-sm rounded-[2.5rem] p-8 hover:shadow-md transition-shadow">
              <div className="bg-brand-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-brand-600">
                <Syringe size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3">Vacinação</h4>
              <p className="text-slate-600 text-sm mb-6">Protocolos vacinais importados e seguros para proteger quem você ama.</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700">
                Agendar <ChevronRight size={16} />
              </a>
            </div>

            {/* Cirurgias */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-900/40 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <HeartPulse size={24} />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3">Cirurgias e Procedimentos</h4>
                <p className="text-slate-400 mb-6 max-w-sm">
                  Centro cirúrgico equipado com tecnologia de ponta e monitoramento contínuo para máxima segurança.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-300">
                  Falar com a Equipe <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Pet Shop */}
            <div className="md:col-span-2 bg-brand-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-500/50 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <ShoppingBag size={24} />
                </div>
                <h4 className="text-2xl font-display font-bold mb-3">Pet Shop Completo</h4>
                <p className="text-brand-100 mb-6 max-w-sm">
                  Rações super premium, medicamentos, acessórios e brinquedos selecionados para o bem-estar do seu pet.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corpo Clínico */}
      <section id="equipe" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Corpo Clínico</h2>
                <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Conheça nosso Responsável Técnico</h3>
                <h4 className="text-2xl font-semibold text-slate-800 mb-2">Dr. Pedro Ernesto</h4>
                <p className="text-brand-600 font-medium mb-6">CRMV-GO 7743</p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Com anos de experiência e dedicação exclusiva à medicina veterinária, o Dr. Pedro lidera nossa equipe com um compromisso inabalável: <strong>salvar vidas e promover o bem-estar animal.</strong>
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Sua abordagem une o rigor científico e a tecnologia de ponta com um atendimento humano, empático e acolhedor, entendendo o amor profundo que cada tutor tem pelo seu pet.
                </p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  Agendar Consulta com Dr. Pedro
                </a>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-brand-100 rounded-[2.5rem] transform -rotate-3 scale-105 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e410f624c427?auto=format&fit=crop&w=800&q=80" 
                  alt="Dr. Pedro Ernesto" 
                  className="rounded-[2.5rem] shadow-xl object-cover aspect-[4/5] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-brand-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-brand-700 rounded-full blur-3xl opacity-50"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-brand-300 font-semibold tracking-wide uppercase text-sm mb-3">Prova Social</h2>
            <h3 className="text-4xl font-display font-bold mb-6">Histórias de amor e vidas salvas</h3>
            <p className="text-lg text-brand-100">O reconhecimento técnico e o carinho dos nossos clientes são a nossa maior recompensa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg text-white mb-8 leading-relaxed">
                "A equipe da Clinicão salvou a vida da nossa gatinha Shakira de madrugada. O Dr. Pedro foi incansável e extremamente técnico. Gratidão eterna por terem uma emergência 24h de verdade!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center font-bold text-xl">M</div>
                <div>
                  <h5 className="font-bold">Maria Silva</h5>
                  <p className="text-sm text-brand-200">Tutora da Shakira</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg text-white mb-8 leading-relaxed">
                "Levo meu cachorro toda semana para o banho e tosa. O cuidado e o carinho que eles têm é impressionante. O ambiente é super limpo, cheiroso e sofisticado."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center font-bold text-xl">J</div>
                <div>
                  <h5 className="font-bold">João Paulo</h5>
                  <p className="text-sm text-brand-200">Cliente Banho & Tosa</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-3xl">
              <div className="flex gap-1 text-yellow-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg text-white mb-8 leading-relaxed">
                "Fizemos a cirurgia de castração do nosso coelho com o Dr. Pedro. Transmitiu muita segurança desde a primeira consulta. Recomendo de olhos fechados para qualquer tutor."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-700 rounded-full flex items-center justify-center font-bold text-xl">A</div>
                <div>
                  <h5 className="font-bold">Ana Costa</h5>
                  <p className="text-sm text-brand-200">Tutora de Coelho</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <HeartPulse className="text-brand-500" size={32} />
                <span className="font-display font-bold text-2xl tracking-tight text-white">CLINICÃO<span className="text-brand-500">pet</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Clínica Veterinária, Banho & Tosa e Pet Shop. Cuidando da saúde e do bem-estar do seu pet de forma integral em Catalão-GO.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/clinicao_pet" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href={PHONE_LINK} className="flex items-center gap-3 hover:text-white transition-colors">
                    <PhoneCall size={18} className="text-brand-500" />
                    (64) 99911-8181
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                    <MessageCircle size={18} className="text-brand-500" />
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-500 shrink-0 mt-1" />
                  <span>Catalão - GO<br/>(Consulte endereço completo via WhatsApp)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Horários</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-alert-400 font-semibold">
                  <Clock size={18} />
                  Emergência: 24 Horas
                </li>
                <li>
                  Banho e Tosa:<br/>
                  Agendamento Prévio
                </li>
                <li>
                  Consultas de Rotina:<br/>
                  Agendamento Prévio
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} CLINICÃO pet. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Responsável Técnico: Dr. Pedro Ernesto - CRMV-GO 7743</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
