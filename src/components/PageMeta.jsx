import { useEffect } from 'react';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Eesa Organics` : 'Eesa Organics — Natural Wellness for a Better You';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
