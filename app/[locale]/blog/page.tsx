import { allArticles } from '@/data/blog/articles'
import BlogContent from './components/BlogContent'

export async function generateMetadata() {
  return {
    title: 'Blog Asigurări - Articole și Ghiduri Complete | asigurari.ro',
    description:
      'Descoperă articole utile despre asigurări: RCA, CASCO, asigurări de viață, sănătate, călătorie și multe altele. Ghiduri complete pentru a lua cele mai bune decizii.'
  }
}

export default async function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:pt-16">
      <div className="flex items-center gap-4 mb-4 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          <strong>Blog Asigurări</strong>
        </h1>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-8">
        <div className="border-l-4 border-green-500 pl-4">
          <p className="text-gray-700 leading-relaxed mb-4">
            Bine ai venit pe blogul nostru dedicat asigurărilor! Aici găsești
            articole detaliate, ghiduri practice și sfaturi utile despre toate
            tipurile de asigurări: de la RCA și CASCO, până la asigurări de
            viață, sănătate, călătorie și multe altele.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Indiferent dacă ești la început de drum sau vrei să îți aprofundezi
            cunoștințele, articolele noastre te ajută să iei decizii informate
            pentru protejarea ta și a celor dragi.
          </p>
        </div>
      </div>

      <BlogContent articles={allArticles} />
    </main>
  )
}
