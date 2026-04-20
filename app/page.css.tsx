import { styled } from 'styled-components';
import { theme } from './theme';

// ── Layout ──────────────────────────────────────────────────────────────────

export const PageRoot = styled.div`
  background: oklch(0.985 0.006 172);
  min-height: 100vh;
`;

// ── Hero ─────────────────────────────────────────────────────────────────────

export const HeroSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 120px 48px 96px;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 80px 24px 64px;
  }
`;

export const HeroEye = styled.p`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: oklch(0.50 0.022 172);
  margin-bottom: 28px;
`;

export const HeroH1 = styled.h1`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: clamp(40px, 5.5vw, 64px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: oklch(0.17 0.022 172);
  max-width: 880px;
  margin-bottom: 32px;

  em {
    font-style: italic;
    color: oklch(0.38 0.09 165);
  }
`;

export const HeroLede = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 19px;
  color: oklch(0.28 0.022 172);
  max-width: 640px;
  line-height: 1.6;

  em {
    font-style: italic;
    color: oklch(0.17 0.022 172);
    font-family: var(--font-fraunces), Georgia, serif;
  }
`;

// ── Shared section wrapper ────────────────────────────────────────────────────

export const PageSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 48px;
  border-top: 1px solid oklch(0.88 0.015 172);

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
  border-bottom: 1px dashed oklch(0.88 0.015 172);
`;

export const SecTitle = styled.h2`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  letter-spacing: -0.015em;
  color: oklch(0.17 0.022 172);
`;

export const SecMeta = styled.span`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: oklch(0.50 0.022 172);
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
  background: #fff;
  border: 1px solid oklch(0.88 0.015 172);
  border-radius: 12px;
  padding: 28px 32px 26px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
  height: 100%;

  &:hover {
    border-color: oklch(0.78 0.08 172);
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
  background: oklch(0.93 0.01 172);
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
  background: ${({ $neutral }) => $neutral ? 'transparent' : 'oklch(0.93 0.05 172)'};
  color: ${({ $neutral }) => $neutral ? 'oklch(0.50 0.022 172)' : 'oklch(0.38 0.09 165)'};
  border: ${({ $neutral }) => $neutral ? '1px solid oklch(0.88 0.015 172)' : 'none'};
`;

export const CardName = styled.h3`
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.015em;
  color: oklch(0.17 0.022 172);
  margin-bottom: 10px;
`;

export const CardDesc = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 15px;
  color: oklch(0.50 0.022 172);
  line-height: 1.6;
  margin-bottom: 18px;
`;

export const CardLink = styled.span`
  font-size: 13px;
  color: oklch(0.38 0.09 165);
  font-weight: 500;
  letter-spacing: 0.02em;
  border-bottom: 1px solid oklch(0.78 0.08 172);
  padding-bottom: 2px;
  display: inline-block;
`;

// ── Tier 2 — Thesis / Point of view ──────────────────────────────────────────

export const ThesisBlock = styled.div`
  background: oklch(0.97 0.012 80);
  border-radius: 16px;
  padding: 48px;
  border: 1px solid oklch(0.88 0.015 172);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 32px 24px;
  }
`;

export const ThesisEye = styled.p`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: oklch(0.38 0.09 165);
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
  color: oklch(0.17 0.022 172);

  em {
    font-style: italic;
    color: oklch(0.38 0.09 165);
  }
`;

export const ThesisLede = styled.p`
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 16px;
  color: oklch(0.28 0.022 172);
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
  background: oklch(0.985 0.006 172);
  border: 1px solid oklch(0.88 0.015 172);
  border-radius: 10px;
  padding: 26px 26px 22px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    border-color: oklch(0.78 0.08 172);
    transform: translateY(-2px);
  }
`;

export const PillarAngle = styled.p`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 11px;
  color: oklch(0.38 0.09 165);
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
  color: oklch(0.17 0.022 172);
`;

export const PillarQ = styled.p`
  font-size: 14px;
  color: oklch(0.50 0.022 172);
  line-height: 1.55;
  font-style: italic;
  font-family: var(--font-fraunces), Georgia, serif;
`;

// ── Tier 3 — Archive ──────────────────────────────────────────────────────────

export const ArchiveList = styled.div`
  border-top: 1px solid oklch(0.88 0.015 172);
`;

export const ArchiveRow = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid oklch(0.88 0.015 172);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
`;

export const ArchiveName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: oklch(0.22 0.022 172);
`;

export const ArchiveMeta = styled.span`
  font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
  font-size: 12px;
  color: oklch(0.50 0.022 172);
  letter-spacing: 0.04em;
`;

// ── Footer ────────────────────────────────────────────────────────────────────

export const HomeFooter = styled.footer`
  border-top: 1px solid oklch(0.88 0.015 172);
  padding: 48px;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 13px;
  color: oklch(0.50 0.022 172);

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid oklch(0.88 0.015 172);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 12px;
    padding: 32px 24px;
  }
`;
