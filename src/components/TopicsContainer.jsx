import { TopicContainer } from "./TopicContainer";

export const TopicsContainer = ({ topics }) => {
  return (
    <div>
      {topics.map((topic) => {
        return (
          <div className="topic-container" key={topic.slug}>
            <TopicContainer topic={topic} />
          </div>
        );
      })}
    </div>
  );
};
