export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/8b1ed2c9-efc8-49e8-8c6a-f25bc4509491/files/544cd7c0-efcc-4e87-8486-6daccbd9a95c.jpg"
          alt="Профессиональная уборка"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Профессиональная команда, экологичные средства и контроль качества на каждом этапе. Мы убираем так, чтобы вы не думали об уборке снова.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Уборка квартир и домов — разово или по подписке</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Офисы и коммерческие помещения</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
            <span>Генеральная уборка после ремонта и переезда</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать цены
        </button>
      </div>
    </div>
  );
}