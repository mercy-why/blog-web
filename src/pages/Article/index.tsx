import { useParams, useRequest } from 'ice';
import { getById } from '@/services';
import { Viewer } from '@bytemd/react';
import highlight from '@bytemd/plugin-highlight-ssr'
import gfm from '@bytemd/plugin-gfm'
import mdiumZoom from '@bytemd/plugin-medium-zoom';
import 'bytemd/dist/index.min.css';
import 'highlight.js/styles/monokai-sublime.css';

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const { data } = useRequest(getById, {
    manual: false,
    defaultParams: [{ id }],
  });
  const plugins = [gfm(), highlight(), mdiumZoom()];
  return (
    <div className="content-x">
      <h1 className="ar-title">{data?.title}</h1>
      <div className="article">
        <Viewer value={data?.content} plugins={plugins} />
      </div>
    </div>
  );
}
