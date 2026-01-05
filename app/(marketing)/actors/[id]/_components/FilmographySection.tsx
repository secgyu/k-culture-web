import Image from "next/image";
import type { FilmographyItem } from "@/src/model";

function groupFilmographyByYear(filmography: FilmographyItem[]) {
  const grouped: Record<number, FilmographyItem[]> = {};
  filmography.forEach((item) => {
    const year = item.year ?? 0;
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(item);
  });
  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, items]) => ({ year: Number(year), items }));
}

interface FilmographySectionProps {
  filmography?: FilmographyItem[];
}

export function FilmographySection({ filmography }: FilmographySectionProps) {
  if (!filmography || filmography.length === 0) return null;

  const groupedFilmography = groupFilmographyByYear(filmography);

  return (
    <section className="px-5 py-8">
      <h2 className="text-heading-md text-ivory mb-6">필모그래피</h2>
      <div className="space-y-8">
        {groupedFilmography.map(({ year, items }) => (
          <div key={year}>
            <h3 className="text-heading-sm text-gold mb-4">{year || "기타"}</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-luxury-secondary rounded-xl hover:bg-luxury-tertiary transition-colors">
                  {item.thumbnail && (
                    <div className="relative w-16 h-22 rounded-lg overflow-hidden shrink-0">
                      <Image src={item.thumbnail} alt={item.title || "작품"} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-ivory truncate">{item.title}</p>
                      <span className="px-2 py-0.5 bg-gold/20 text-gold text-caption rounded shrink-0">
                        {item.roleType}
                      </span>
                    </div>
                    <p className="text-body-sm text-muted-gray mb-1">{item.role}</p>
                    <p className="text-caption text-muted-gray">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

