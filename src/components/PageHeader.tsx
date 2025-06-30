interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative h-64 md:h-80 bg-cover bg-center bg-no-repeat overflow-hidden"
         style={{
           backgroundImage: `url('https://ps126x.wordpress.com/wp-content/uploads/2020/07/5.jpg')`
         }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Title card with gradient */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="bg-gradient-to-r from-red-500 to-yellow-400 text-white px-8 py-6 rounded-xl shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
} 