import React from 'react';
import { Link } from '@reach/router';
import { Icon } from '@iconify/react';
import codeOutline from '@iconify/icons-ant-design/code-outline';
import footballIcon from '@iconify/icons-ion/football';
import foodIcon from '@iconify/icons-mdi/food';

const TopicsPage = ({ slug, description }) => {
  return (
    <div className="article-container">
      <Link className="article-link" to={`/topics/${slug}`}>
        <h2>{slug}</h2>
      </Link>
      <div className="topic-icon">
        {slug === 'coding' ? <Icon icon={codeOutline} /> : null}
        {slug === 'football' ? <Icon icon={footballIcon} /> : null}
        {slug === 'cooking' ? <Icon icon={foodIcon} /> : null}
      </div>
      <h3>{description}</h3>
    </div>
  );
};

export default TopicsPage;
