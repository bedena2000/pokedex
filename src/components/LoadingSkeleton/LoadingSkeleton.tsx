import './LoadingSkeletonStyle.scss';

const LoadingSkeleton = () => {
  return (
    <div className='LoadingSkeletoin-wrapper'>
      <div className="LoadingSkeletoin-wrapper__image"></div>
      <div className="LoadingSkeletoin-wrapper__name"></div>
      <div className="LoadingSkeletoin-wrapper__number"></div>
    </div>
  )
};

export default LoadingSkeleton;