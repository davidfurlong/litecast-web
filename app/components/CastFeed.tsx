import { FunctionComponent } from 'react';
import { useLatestCasts, useLogin } from "../providers/NeynarProvider"
import { NeynarCastV2 } from "../types";
import CastFeedItem from "./CastFeedItem";
import ModEditor from './ModEditor';

interface CastFeedProps {
  castEditorVisible?: boolean;
  username?: string;
}

const CastFeed: FunctionComponent<CastFeedProps> = ({
  castEditorVisible = false,
  username,
}) => {
    const { casts, isLoading, isReachingEnd, loadMore } = useLatestCasts();
    const  { farcasterUser } = useLogin();
    // note: should add error to this 
    return(
        <div className="flex flex-col w-full gap-1 pb-4 overflow-y-auto">
            {farcasterUser && castEditorVisible && <ModEditor />}
            {casts && casts.map((item: NeynarCastV2, index) => {
                return <CastFeedItem cast={item} key={`cast-feed-item-${index}`} />
            })}
        </div>
    )
}

export default CastFeed;