// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import MarkdownCodeBlock from './markdown_code_block';

function mapStateToProps(state, ownProps) {
    return {
        theme: getTheme(state),
        ...ownProps
    };
}

export default connect(mapStateToProps)(MarkdownCodeBlock);
