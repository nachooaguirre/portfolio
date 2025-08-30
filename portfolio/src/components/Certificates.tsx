import { Certificate } from "@/domain/models/Certificate";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { certificatesStyles as styles } from "@/styles/styles";

type CertificatesProps = { items: Certificate[] };

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


