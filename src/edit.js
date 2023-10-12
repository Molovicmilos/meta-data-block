import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
// eslint-disable-next-line no-unused-vars
import { useSelect, useDispatch } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import './editor.scss';

export default function Edit() {
	const postType = useSelect( ( select ) => {
		return select( 'core/editor' ).getCurrentPostType();
	}, [] );
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const subTitleValue = meta._blocks_u_post_subtitle;

	const onSubTitleChange = ( newVal ) => {
		setMeta( { ...meta, _blocks_u_post_subtitle: newVal } );
	};
	return (
		<div { ...useBlockProps() }>
			{ subTitleValue || subTitleValue === '' ? (
				<TextControl
					label={ __( 'Post Subtitle', 'metadata-block' ) }
					value={ subTitleValue }
					onChange={ onSubTitleChange }
				/>
			) : (
				__( 'Meta Field is not registered', 'metadata-block' )
			) }
		</div>
	);
}
