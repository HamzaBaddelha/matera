import type { Metadata } from 'next';
import type { Locale } from '@/types';
import { getDictionary } from '@/lib/i18n';
import { branches } from '@/data/branches';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BranchCard from '@/components/BranchCard';
import FadeUpInView from '@/components/ui/FadeUpInView';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.branches.pageTitle,
    description: dict.branches.pageSubtitle,
    openGraph: {
      title: `${dict.branches.pageTitle} | MATERA`,
      description: dict.branches.pageSubtitle,
    },
  };
}

export default async function BranchesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <section className="pt-32 pb-24 md:pb-32">
      <Container>
        <SectionHeading
          title={dict.branches.pageTitle}
          subtitle={dict.branches.pageSubtitle}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <FadeUpInView key={branch.id} index={index}>
              <BranchCard
                branch={branch}
                locale={locale as Locale}
                dict={dict}
              />
            </FadeUpInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
