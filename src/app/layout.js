export const metadata={
  title:'my blog',
  description:'blog'
}

export default function RootLayout({children}){
  return (
    <html lang="zh">
      <head />
      <body className="bg-white text-gray-900 font-sans">
        <div className="max-w-2xl mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  )
}
