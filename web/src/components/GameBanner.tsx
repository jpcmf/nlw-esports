interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={props.title} />
      <div className="w-full pt-16 pb-4 px-4 bg-landing-card-gradient absolute bottom-0 left-0 right-0">
        <strong className="block font-bold text-white">{props.title}</strong>
        <span className="block text-small text-zinc-300">
          {props.adsCount} anúncios
        </span>
      </div>
    </a>
  );
}
