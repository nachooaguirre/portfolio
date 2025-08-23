import { Certificate } from "@/domain/models/Certificate";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";

type CertificatesProps = { items: Certificate[] };

const styles = {
  list: "space-y-3",
  item: "flex items-start justify-between gap-4",
  itemTitle: "font-medium",
  meta: "text-sm text-foreground/70",
  link: "text-sm underline hover:no-underline",
} as const;

export default function Certificates({ items }: CertificatesProps) {
  return (
    <Section title="Certificados">
      <ul className={styles.list}>
        {items.map((c) => (
          <li key={c.id}>
            <Card>
              <CardBody className={styles.item}>
                <div>
                  <p className={styles.itemTitle}>{c.title}</p>
                  <p className={styles.meta}>{c.platform}{c.issuedAt ? ` · ${c.issuedAt}` : ""}</p>
                </div>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" className={styles.link}>
                    Ver credencial
                  </a>
                ) : null}
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}


