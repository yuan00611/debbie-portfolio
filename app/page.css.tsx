import { styled } from 'styled-components';
import { theme } from './theme';

// ── Layout ──────────────────────────────────────────────────────────────────

export const PageRoot = styled.div`
  background: var(--background);
  color: var(--foreground);
  min-height: 100vh;
  transition: background-color 0.35s ease, color 0.35s ease;
`;

// ── Hero ─────────────────────────────────────────────────────────────────────
// (hero content is now inline in page.tsx; this wrapper provides layout only)

export const HeroWrapper = styled.header`
  position: relative;
  background: var(--background);
  overflow: hidden;
  background-image: radial-gradient(var(--grid-dot) 1px, transparent 1px);
  background-size: 26px 26px;
  padding: 96px 24px 64px;
  text-align: center;
  border-bottom: 1px solid var(--stroke-1);
  transition: background-color 0.35s ease, border-color 0.35s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 80px 24px 48px;
  }
`;

// ── Shared section wrapper ────────────────────────────────────────────────────

export const PageSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 48px;
  border-top: 1px solid var(--stroke-2);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 64px 24px;
  }
`;

export const SecHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 44px;
  padding-bottom: 18px;
  border-bottom: 1px dashed var(--stroke-2);
`;

export const SecTitle = styled.h2`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  letter-spacing: -0.015em;
  color: var(--foreground);
`;

export const SecMeta = styled.span`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

// ── Tier 1 — Featured cards ───────────────────────────────────────────────────

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedCard = styled.div`
  background: var(--card);
  border: 1px solid var(--stroke-2);
  border-radius: 12px;
  padding: 28px 32px 26px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
  height: 100%;

  &:hover {
    border-color: var(--brand-teal);
    transform: translateY(-2px);
  }
`;

export const FeaturedCardWide = styled(FeaturedCard)``;

export const WideCardWrapper = styled.div`
  grid-column: 1 / -1;
  a { text-decoration: none; display: block; }
`;

export const HalfCardWrapper = styled.div`
  a { text-decoration: none; display: block; height: 100%; }
`;

export const CardImageBox = styled.div<{ $wide?: boolean }>`
  height: ${({ $wide }) => ($wide ? '280px' : '200px')};
  border-radius: 8px;
  margin-bottom: 22px;
  overflow: hidden;
  position: relative;
  background: var(--raised-2);
`;

export const CardTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

export const CardTag = styled.span<{ $neutral?: boolean }>`
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: ${({ $neutral }) => $neutral ? 'transparent' : 'var(--secondary)'};
  color: ${({ $neutral }) => $neutral ? 'var(--muted-foreground)' : 'var(--primary)'};
  border: ${({ $neutral }) => $neutral ? '1px solid var(--stroke-2)' : 'none'};
`;

export const CardName = styled.h3`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.015em;
  color: var(--foreground);
  margin-bottom: 10px;
`;

export const CardDesc = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 15px;
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-bottom: 18px;
`;

export const CardLink = styled.span`
  font-size: 13px;
  color: var(--primary);
  font-weight: 500;
  letter-spacing: 0.02em;
  border-bottom: 1px solid var(--stroke-3);
  padding-bottom: 2px;
  display: inline-block;
`;

// ── Tier 2 — Thesis / Point of view ──────────────────────────────────────────

export const ThesisBlock = styled.div`
  background: var(--raised-2);
  border-radius: 16px;
  padding: 48px;
  border: 1px solid var(--stroke-2);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 32px 24px;
  }
`;

export const ThesisEye = styled.p`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand-warm);
  font-weight: 500;
  margin-bottom: 18px;
`;

export const ThesisTitle = styled.h3`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
  max-width: 680px;
  color: var(--foreground);

  em {
    font-style: italic;
    color: var(--primary);
  }
`;

export const ThesisLede = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 16px;
  color: var(--muted-foreground);
  max-width: 640px;
  margin-bottom: 36px;
  line-height: 1.65;
`;

export const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PillarCard = styled.div`
  background: var(--card);
  border: 1px solid var(--stroke-2);
  border-radius: 10px;
  padding: 26px 26px 22px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--brand-teal);
    transform: translateY(-2px);
  }
`;

export const PillarAngle = styled.p`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  color: var(--brand-warm);
  letter-spacing: 0.1em;
  margin-bottom: 14px;
  font-weight: 500;
`;

export const PillarName = styled.h4`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
  color: var(--foreground);
`;

export const PillarQ = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
  line-height: 1.55;
  font-style: italic;
  font-family: var(--font-fraunces), Georgia, serif;
`;

// ── Tier 3 — Interactive & immersive ─────────────────────────────────────────

export const SecLede = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 16px;
  color: var(--muted-foreground);
  max-width: 640px;
  line-height: 1.65;
  margin: -20px 0 40px;
`;

export const MiniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MiniCard = styled.a`
  display: block;
  text-decoration: none;
  background: var(--card);
  border: 1px solid var(--stroke-2);
  border-radius: 10px;
  padding: 14px 14px 16px;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--brand-teal);
    transform: translateY(-2px);
  }
`;

export const MiniThumb = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    repeating-linear-gradient(135deg, color-mix(in oklch, var(--foreground) 3%, transparent) 0 10px, transparent 10px 20px),
    var(--raised-2);
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted-foreground);
`;

export const MiniName = styled.h4`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 17px;
  font-weight: 400;
  color: var(--foreground);
  margin-bottom: 6px;
  line-height: 1.3;
`;

export const MiniTag = styled.span`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--muted-foreground);
`;

// ── Tier 4 — Archive ──────────────────────────────────────────────────────────

export const ArchiveList = styled.div`
  border-top: 1px solid var(--stroke-2);
`;

export const ArchiveRow = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid var(--stroke-2);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-bottom-color: var(--brand-teal);
  }
`;

export const ArchiveName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
`;

export const ArchiveMeta = styled.span`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 12px;
  color: var(--muted-foreground);
  letter-spacing: 0.04em;
`;

// ── Footer ────────────────────────────────────────────────────────────────────

export const HomeFooter = styled.footer`
  border-top: 1px solid var(--stroke-2);
  padding: 48px;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 13px;
  color: var(--muted-foreground);

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--stroke-2);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 12px;
    padding: 32px 24px;
  }
`;
