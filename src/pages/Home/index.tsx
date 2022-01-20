import { Link, useParams, useRequest } from 'ice';
import { getBlogList } from '@/services';
import { List } from 'antd';
import { useEffect } from 'react';

interface tableItem {
  id: number;
  title: string;
  description: string;
}
const Home = () => {
  const { account } = useParams<{ account: string }>();
  const { data: list, request, loading } = useRequest(getBlogList);
  useEffect(() => {
    if (account) {
      request({ account });
    }
  }, [account, request]);
  return (
    <>
      <section>
        <h1 className="title-x">A blog that you won't read.</h1>
      </section>
      <section>
        <div className="content-x">
          <List<tableItem>
            dataSource={list?.records}
            split={false}
            renderItem={(item) => (
              <List.Item>
                <div className="item-x">
                  <h2 className="post-title">
                    <Link to={`/article/${item.id}`}>{item.title}</Link>
                  </h2>
                  <p>{item.description}</p>
                </div>
              </List.Item>
            )}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
