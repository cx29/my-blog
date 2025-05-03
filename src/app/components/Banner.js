import Typewriter from './Typewriter';

export default function Banner() {
  return (
    <div className="w-full bg-blue-600 text-white text-center py-16">
      <h1 className="text-5xl font-bold">欢迎来到我的blog</h1>
      <p className="text-lg mt-4 min-h-[2rem]">
        <Typewriter
          texts={['记录我的脚步', '分享我的想法', '欢迎来到我的博客']}
        />
      </p>
    </div>
  );
}
